import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
const prisma = new PrismaClient()
const saltRounds = 10;


export async function createUser(req: any, res: any) {
    const { email, password } = req.body;
    console.log(req.body);
    
    if (!email || !password) {
        return res.status(400).json({
            message: 'Please provide email and password'
        });
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    const user = await prisma.users.create({
        data: {
            email: email,
            password: hash,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    })
    res.json(user);

}


export async function loginUser(req: any, res: any) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: 'Please provide email and password'
        });
    }
    const user = await prisma.users.findFirst({
        where: {
            email: email
        }
    })
    if (!user) {
        return res.status(401).json({ error: 'User not found' })
    }
    const passwordMatch = bcrypt.compare(password, user.password || '');
    if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid password' })
    }
    const token = jwt.sign({ userId: user.id },  process.env.SECRETKEY || 'JWT_SECRET', { expiresIn: '1h' })
    res.json({ token })

}


