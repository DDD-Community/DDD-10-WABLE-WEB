import styled from '@emotion/styled';

const CarouselStyleWrapper = styled.div`
  position: relative;
  padding: 0 12px;
  margin-bottom: 52px;

  .embla {
    --slide-spacing: 1rem;
    --slide-size: 100%;
  }

  .embla__viewport {
    overflow: hidden;
  }

  .embla__container {
    touch-action: pan-y;
    display: flex;
    margin-left: calc(var(--slide-spacing) * -1);
    backface-visibility: hidden;
  }

  .embla__slide {
    position: relative;
    flex: 0 0 var(--slide-size);
    min-width: 0;
    padding-left: var(--slide-spacing);
  }

  .embla__button {
    touch-action: manipulation;
    cursor: pointer;

    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0;
    padding: 0;

    font-size: 24px;
    color: var(--background-site);
    text-decoration: none;

    appearance: none;
    background-color: transparent;
    border: 0;
  }

  .embla__button--prev {
    position: absolute;
    top: 50%;
    left: -1rem;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
  }

  .embla__button--next {
    position: absolute;
    top: 50%;
    right: -1rem;
    transform: translateY(-50%);

    display: flex;
    align-items: center;
  }

  .embla__button:disabled {
    opacity: 0.3;
  }

  .embla__dot {
    touch-action: manipulation;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.5rem;
    height: 1.5rem;
    margin: 0;
    padding: 0;

    text-decoration: none;
    appearance: none;
    background-color: transparent;
    border: 0;
  }

  .embla__dots {
    position: absolute;
    z-index: 1;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
  }

  .embla__dot::after {
    content: '';

    width: 0.5rem;
    height: 0.5rem;

    background: #d8dde0;
    border-radius: 0.2rem;
  }

  .embla__dot--selected::after {
    background: #686868;
  }
`;

export default CarouselStyleWrapper;
