import styled from "@emotion/styled";

const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #131b39;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 1.3;
  position: relative;
  padding-top: 80px;
`;

interface Title {
  children: string;
}
const MainTitle = ({ children }: Title) => {
  return <Title>{children}</Title>;
};

export default MainTitle;
