import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    {children}
  </Section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
