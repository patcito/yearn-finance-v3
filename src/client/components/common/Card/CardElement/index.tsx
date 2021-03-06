import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div<{ width?: string; align?: string; grow?: string; fontWeight?: number }>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width ?? '17rem'};
  align-items: ${({ align }) => align ?? 'flex-start'};
  flex-grow: ${({ grow }) => grow ?? '0'};
  margin: 0.825rem ${({ theme }) => theme.cardPadding};
  font-weight: ${({ fontWeight }) => fontWeight ?? 400};
`;

const Header = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.onSurfaceSH1};
`;

const Content = styled.div`
  margin-top: 0.5rem;
  font-size: 2.4rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;
  color: ${({ theme }) => theme.colors.onSurfaceH2};
`;

interface CardElementProps {
  header?: string;
  content?: string | ReactNode;
  width?: string;
  align?: 'flex-start' | 'center' | 'flex-end';
  grow?: '1' | '0';
  fontWeight?: number;
  className?: string;
}

export const CardElement: FC<CardElementProps> = ({
  children,
  header,
  content,
  width,
  align,
  grow,
  fontWeight,
  className,
  ...props
}) => {
  return (
    <Container width={width} align={align} grow={grow} fontWeight={fontWeight} className={className} {...props}>
      {header && <Header>{header}</Header>}
      {content && <Content>{content}</Content>}
      {children}
    </Container>
  );
};
