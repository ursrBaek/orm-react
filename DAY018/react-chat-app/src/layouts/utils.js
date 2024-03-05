import { Link } from 'react-router-dom';

export const pageNameObj = {
  login: { header: 'Login', message: 'Sign in to continue to Chatvia.' },
  register: { header: 'Register', message: 'Get your Chatvia account now.' },
  'forgot-password': {
    header: 'Forgot Password',
    message: 'Reset Password With Chatvia.',
  },
  logout: {
    header: 'Logout',
    message: '로그아웃 되었습니다.',
  },
};

export const formBottomComp = {
  login: (
    <p>
      Don't have an account ?{' '}
      <Link to="/auth/register" className="font-weight-medium text-primary">
        {' '}
        Signup now{' '}
      </Link>{' '}
    </p>
  ),
  register: (
    <p>
      Already have an account ?{' '}
      <Link to="login" className="font-weight-medium text-primary">
        {' '}
        Login{' '}
      </Link>{' '}
    </p>
  ),
  'forgot-password': (
    <p>
      Remember It ?{' '}
      <Link to="login" className="font-weight-medium text-primary">
        {' '}
        Login{' '}
      </Link>{' '}
    </p>
  ),
  logout: <p>로그아웃~</p>,
};
