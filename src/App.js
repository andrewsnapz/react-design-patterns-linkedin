import axios from "axios";
import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserLoader } from "./UserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { DataSource } from "./DataSource";

import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h1>{message}</h1>;

function App() {
  return (
    <>
      {/* <UserLoader userId="234">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="123">
        <UserInfo />
      </UserLoader>
      <UserLoader userId="345">
        <UserInfo />
      </UserLoader> */}
      {/* <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader> */}
      <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource>

      <DataSource
        getDataFunc={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default App;
