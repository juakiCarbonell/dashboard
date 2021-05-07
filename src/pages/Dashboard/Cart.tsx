import styled from 'styled-components';
import { useHistory } from "react-router-dom";

interface Props {
  task: {
    id: number;
    title: string;
    description: string;
    status: string;
  };
}

const Cart = (props: Props) => {
  const {
    task: { title, description, id },
  } = props;
  let history = useHistory();


  const handleClick = () => {
    history.push(`task/${id}`);
  }

  return (
    <CartWrapper onClick={handleClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 1rem;
  margin: 20px 0;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

export default Cart;
