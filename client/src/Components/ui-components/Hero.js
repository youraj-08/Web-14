import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import SearchBar from './SearchBar';


const StyledBox = styled('div')(({ theme }) => ({
  
  margin: 'auto',
  width: '95%',
  height: 'auto',

  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: '6px solid',
  outlineColor: 'hsla(220, 25%, 80%, 0.2)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',

  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(8),
    height: 'auto',
  },
  ...theme.applyStyles('dark', {
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',

    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Hero() {
  return (
    <div>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 12, sm: 15 },
          pb: { xs: 8, sm: -1 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            fontSize: 'clamp(3rem, 10vw, 3.5rem)',
          }}
        >
          Aurora&nbsp;
          <Typography
            component="span"
            variant="h1"
            sx={(theme) => ({
              fontSize: 'inherit',
              color: 'primary.main',
              ...theme.applyStyles('dark', {
                color: 'primary.light',
              }),
            })}
          >
            AI
          </Typography>
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            color: 'text.secondary',
            width: { sm: '100%', md: '80%' },
          }}
        >
          Discover Aurora-AI, your personalized music companion that reads your musical DNA.
          Experience a seamless way to explore and enjoy tailored music recommendations,
          enhancing your listening journey like never before.
        </Typography>

      </Container>

      
        <StyledBox  >
          <SearchBar />
        </StyledBox>
    </div>
  );
}
