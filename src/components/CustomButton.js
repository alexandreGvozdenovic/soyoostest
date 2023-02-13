import "./CustomButton.css";
export default function CustomButton({ variant = "filled", children }) {
  return <button className={variant}>{children}</button>;
}
