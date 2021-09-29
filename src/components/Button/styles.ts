import { ifoodStyled } from "../../styles";

export const Container = ifoodStyled('button', {
  appearance: 'none',
  border: 0,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  px: '$32',
  py: '$16',

  variants: {
    variant: {
      primary: {
        background: '$button-primary-bg',
        color: '$button-primary-text'
      },
      secondary: {
        background: '$button-secondary-bg',
        color: '$button-secondary-text',
        border: '1px solid',
        borderColor: '$red600'
      }
    }
  }
});