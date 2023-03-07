export const container = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  exit: {
    backgroundColor: '#F57A73',
    height: '2000px',
    transition: {
      duration: 2,
    },
  },
}

export const itemDown = {
  hidden: { y: 0 },
  show: {
    y: 50,
    transition: {
      duration: 3,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0.1,
    transition: {
      ease: 'easeInOut',
      duration: 2,
    },
  },
}

export const itemUp = {
  hidden: { y: 0 },
  show: {
    y: -50,
    transition: {
      duration: 3,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0.1,
    transition: {
      ease: 'easeInOut',
      duration: 2,
    },
  },
}

export const itemFade = {
  hidden: { y: 0 },
  show: {
    y: 0,
    transition: {
      duration: 3,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0.1,
    transition: {
      ease: 'easeInOut',
      duration: 2,
    },
  },
}

export const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1.8,
      delay: 3.7,
    },
  },
}
