type Params = {
  name: string;
};

export async function GET(request: Request, context: { params: Params }) {
  return Response.json({ message: `Hello from ${context?.params?.name || 'Next.js'}!` });
}
