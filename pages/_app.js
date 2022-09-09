import Layout from "../components/Layout";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/style.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from "wagmi/providers/public";

const alchemyId = process.env.API_URL;

const { chains, providers } = configureChains(
  [chain.polygon],
  [alchemyProvider({ alchemyId }), publicProvider()]
);

const { connectors }  = getDefaultWallets({
  appName: "web3rsvp",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client = {wagmiClient}>
      <RainbowKitProvider chains = {chains}>
        <Layout>
          <Component {... pageProps} />
        </Layout>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
