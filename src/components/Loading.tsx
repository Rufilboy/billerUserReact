import loadingsvg from "../icon/loading.gif";

export const Loading = () => {
  return (
    <div className="bg-white flex justify center items-center ">
      <img src={loadingsvg} alt="Loading..." />
    </div>
  );
};
