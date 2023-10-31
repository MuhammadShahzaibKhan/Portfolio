import Button from "@mui/material/Button";

export default function SKInput(props) {
  const { name, variant, className, onClick } = props;
  return (
    <>
      <div>
        <Button variant={variant} className={className} onClick={onClick}>{name}</Button>
      </div>
    </>
  );
}
