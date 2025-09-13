// src/pages/Data.tsx
import { useTitle } from "../hooks/useTitle";
function Data() {
   useTitle("Data | Data Portal");
    return (
      <section className="min-h-screen bg-brand-black text-white pt-24 px-6 grid place-items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold">Data</h1>
      </section>
    );
}
export default Data
