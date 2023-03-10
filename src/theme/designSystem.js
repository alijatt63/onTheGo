const colors = {
    primary: "#d61a0d",
    secondary: "#f5b72d",
    accent: "#ed6158",
    white: "white",
    black: "black",
  };
  
  const typography = {
    slicedThrough: {
      fontWeight: 100,
      textDecorationLine: "line-through",
      fontStyle: "italic",
      fontSize: 40,
    },
    heading400: {
      fontWeight: "bold",
      fontSize: 30,
      color: "blue",
    },
  };
  
  const genericStyles = {
    inputBase: {
      borderRadius: 50,
      borderWidth: 1,
      borderColor: colors.accent,
      padding: 10,
      color:colors.primary
    },
  };
  
  export { colors, typography, genericStyles };
  