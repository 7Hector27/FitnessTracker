import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', [
    cookie.serialize('x-auth-token', '', {
      maxAge: -1,
      path: '/',
    }),
  ]);

  res.send('logout');
  res.end();
};
export default logout;
