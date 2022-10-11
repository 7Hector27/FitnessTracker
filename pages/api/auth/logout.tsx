import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Set-Cookie', [
    cookie.serialize('AUTH_TOKEN', '', {
      maxAge: -1,
      path: '/',
    }),
  ]);

  return res.status(200).json({
    message: 'Successfully logged out',
  });
};
export default logout;
