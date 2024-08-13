interface LoginProps {
  dog: string;
}
export default function Login({ dog }: LoginProps) {
  return <img src={dog} />;
}
