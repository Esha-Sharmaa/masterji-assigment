const ChaiCode = () => {
  return (
    <a
      href="https://chaicode.com/"
      className="chai-code"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/chaiaurcode.png`}
        alt="chaiaurcode"
      />
    </a>
  );
};
export default ChaiCode;
