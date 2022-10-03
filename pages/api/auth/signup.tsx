import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { firstName, lastName, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    // Check if user Exists

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    // res.status(201).json({ error: false, msg: 'User Found Successfuly' });
    // if so throw error
    if (existingUser) {
      return res.status(400).json({
        error: [
          {
            message: `User with email: ${email} already exists`,
            code: 400,
          },
        ],
      });
    }

    // if !existing user then add user to the db
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email: email.toLowerCase(),
        password: bcrypt.hashSync(password, salt),
      },
    });
    res.json(newUser);

    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, time: Date.now() },
      process.env.SECRET as string,
      { expiresIn: '8h' }
    );

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('x-auth-token', token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
    );
    res.json(newUser);
  }
};

export default signup;
