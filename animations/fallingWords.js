export const fallContainer = {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  }
  
  export const fallSpring1 = {
    hidden: {
      y: -4000,
    },
    show: {
      y: 0,
      rotate: [null, 2, -3, 3, -2, 2, 0],
      transition: {
        type: 'spring',
        damping: 40,
        mass: 100,
        stiffness: 20,
        //   duration: 5,
      },
    },
  }
  
  export const fallSpring2 = {
    hidden: {
      y: -4000,
      rotate: [null, -3, 2, -2, 3, -2, 0],
  
    },
    show: {
      y: 0,
      transition: {
        type: 'spring',
        damping: 40,
        mass: 100,
        stiffness: 20,
        //   duration: 5,
      },
    },
  }
  
  export const fall1 = {
    hidden: {
      y: -4000,
    },
    show: {
      y: 0,
      rotate: [null, 2, -3, 3, -2, 2, 0],
      transition: {
        ease: 'easeIn',
        duration: 12,
      },
    },
  }
  
  export const fall2 = {
    hidden: {
      y: -4000,
    },
    show: {
      y: 0,
      rotate: [null, -3, 2, -2, 3, -2, 0],
      transition: {
        ease: 'easeIn',
        duration: 12,
      },
    },
  }