import Moralis from 'moralis';

const config = {
  domain: process.env.APP_DOMAIN,
  statement: 'Web Login.',
  uri: process.env.NEXTAUTH_URL,
  timeout: 60,
};

export default async function handler(req, res) {
  const { address, chain, network } = req.body;

  await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

  try {
    const message = await Moralis.Auth.requestMessage({
      address,
      chain,
      network,
      ...config,
    });

    // Create a new object with primitive data types for JSON response
    const responseData = {
      message: message,
      // Add other properties here if needed
    };

    res.status(200).json(responseData);
  } catch (error) {
    res.status(400).json({ error });
    console.error(error);
  }
}
