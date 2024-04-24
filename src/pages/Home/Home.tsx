import LinkAsButton from '@/components/LinkAsButton';

export const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-8">
      <div className="flex flex-wrap-reverse flex-1 justify-center items-center place-content-center gap-8 w-full">
        <div className="text-left">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Déclaration de sinistre
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">Une solution développée par ACS Solutions.</p>
        </div>
        <img
          src="acs-solutions-logo.png"
          alt="Illustration d'une personne déclarant un sinistre"
          className="w-full max-w-sm"
        />
      </div>
      <LinkAsButton to={`/declarer-sinistre`} className="justify-end">
        Débuter le parcours
      </LinkAsButton>
    </main>
  );
};
