export const borderInput = (border, borderColor, err) => {
  switch (border) {
    case "border-0":
      return err
        ? `border border-errBorder`
        : `hover:border-b-2 hover:border-b-primary`;

    default:
      return err
        ? `${border} border-errBorder`
        : `${border} ${borderColor ? borderColor : "border-primary"}`;
  }
};

export const CastToBoolean = (string) => (string === "true" ? true : false);

const smallClass =
  "pointer-events-none relative w-auto translate-y-[-50px] opacity-100 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[300px]  h-[calc(100%-1rem)] transform-none ";
const mediumClass =
  "pointer-events-none relative w-auto translate-y-[-50px] opacity-100 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px] h-[calc(100%-1rem)] transform-none ";
const largeClass =
  "pointer-events-none relative w-auto translate-y-[-50px] opacity-100 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px]  h-[calc(100%-1rem)] transform-none ";
const extraClass =
  "pointer-events-none relative w-auto translate-y-[-50px] opacity-100 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]  h-[calc(100%-1rem)] transform-none ";

export const ModalSizes = (type) => {
  switch (type) {
    case "small":
      return smallClass;
    case "medium":
      return mediumClass;
    case "large":
      return largeClass;
    default:
      return extraClass;
  }
};
