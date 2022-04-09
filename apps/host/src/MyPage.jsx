export function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <micro-app
        name="app1"
        url="http://localhost:3001/"
        baseroute="/my-page"
      ></micro-app>
    </div>
  );
}
