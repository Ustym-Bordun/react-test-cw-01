// src/components/Alert.jsx

// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   color: "white",
// };

// const getBgColor = (variant) => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       // throw new Error(`Unsupported variant prop value - ${variant}`);

//       return "teal";
//   }
// };

import clsx from "clsx";

// import "./Alert.css";
import css from "./Alert.module.css";

// console.log(css);

export const Alert = ({ variant, outlined, elevated, children }) => {
  //   const classNames = ["alert", variant];

  //   if (outlined) {
  //     classNames.push("is-outlined");
  //   }

  //   if (elevated) {
  //     classNames.push("is-elevated");
  //   }

  return (
    <p
      //  style={{
      //    ...alertStyles,
      //    backgroundColor: getBgColor(variant),
      //  }}

      //   className={classNames.join(" ")}

      //   className={clsx("alert", variant, {
      //     "is-outlined": outlined,
      //     "is-elevated": elevated,
      //   })}

      //   className={(css.alert, css[variant])}

      className={clsx(
        css.alert,
        css[variant],
        outlined && css.isOutlined,
        elevated && css.isElevated
      )}
    >
      {children}
    </p>
  );
};
