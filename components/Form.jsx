export default function Form() {
  return (
    <div className="relative z-50 m-auto my-0 max-w-6xl space-y-16">
      <div className="space-y-5 text-secondary">
        <p>
          Dancing is a mother-daughter vineyard in Sonoma. Our debut expression
          will launch in 2025.
        </p>
        <p>
          We hope to dismantle the culture that surrounds wine, from the open
          pretentiousness and formalities to the obscure and somewhat ridiculous
          vocabulary – making each sip less daunting for a new generation who
          are curious to explore.
        </p>
      </div>
      <div>
        <form
          className="font-base m-auto w-max space-x-5 border-b border-offWhite pb-3 font-bold focus-within:border-b-2 hover:border-b-2"
          action="#"
        >
          <input
            className="w-80 bg-transparent uppercase outline-none"
            type="email"
          />
          <button className="uppercase">Join the dance</button>
        </form>
      </div>
    </div>
  )
}
