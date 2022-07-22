const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });



export const welcomeOptions = { 
    headerShown: false, 
    cardStyleInterpolator: forFade,
};