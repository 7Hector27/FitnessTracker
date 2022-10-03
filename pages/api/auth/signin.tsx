import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

const signin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body;
  if (req.method === 'POST') {
    // Search DB to see if user exists or not
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // if No user throw Error
    if (!user) {
      return res.status(400).json({
        error: [
          {
            message: `Invalid Credentials`,
            code: 400,
          },
        ],
      });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({
        error: [
          {
            message: `Invalid Credentials`,
            code: 400,
          },
        ],
      });
    }

    //Sign the Topen with the User Id and Email
    const token = jwt.sign(
      { id: user.id, email: user.email, time: Date.now() },
      process.env.SECRET as string,
      { expiresIn: '8h' }
    );
    // Set token in the Header/Cookies
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
    res.json(user);
    res.json('logged in');
  }
};

export default signin;
