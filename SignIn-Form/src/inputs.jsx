export default function InputFields({ data, onInputChange }) {
  return (
    <>
      <label htmlFor="email">Email -</label>
      <input
        type="email"
        name="email"
        id="email"
        value={data.email}
        placeholder="Enter Your Email"
        onChange={onInputChange}
      />

      <label htmlFor="password">Password -</label>
      <input
        type="password"
        name="password"
        id="password"
        value={data.password}
        placeholder="Enter Your Password"
        onChange={onInputChange}
      />
    </>
  );
}
