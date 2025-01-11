export default function ExperienceAndProjects() {

    return (
        <div className="bg-gray-900">

            <main>

                <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                    {/* Details section */}
                    <section aria-labelledby="details-heading">
                        <div className="flex flex-col items-center text-center">
                            <h2 id="details-heading" className="text-3xl font-bold tracking-tight text-white 0 sm:text-4xl">
                                Our Experiences & Projects
                            </h2>
                            <p className="mt-8 max-w-3xl text-lg text-white">
                                Below are some of the projects we have worked on. We are proud of our work and we are always looking for new challenges.
                            </p>
                        </div>

                        <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                            <div>
                                <img
                                    alt="Drawstring top with elastic loop closure and textured interior padding."
                                    src="/isbankasi.png"
                                    className="h-full w-full rounded-lg"
                                />

                            </div>

                            <div>

                                <img
                                    alt="Front zipper pouch with included key ring."
                                    src="/akbank.png"
                                    className="h-full w-full rounded-lg"
                                />

                            </div>

                            <div>

                                <img
                                    alt="Front zipper pouch with included key ring."
                                    src="/yumos.png"
                                    className="h-full w-full rounded-lg"
                                />

                            </div>

                            <div>

                                <img
                                    alt="Front zipper pouch with included key ring."
                                    src="/milka.png"
                                    className="h-full w-full rounded-lg"
                                />

                            </div>

                            <div>

                                <img
                                    alt="Front zipper pouch with included key ring."
                                    src="/terra.png"
                                    className="h-full w-full rounded-lg"
                                />

                            </div>

                            <div>

                                <img
                                    alt="Front zipper pouch with included key ring."
                                    src="/arabanagelsin.png"
                                    className="h-full w-full rounded-lg"
                                />

                            </div>
                        </div>
                    </section>


                </div>


            </main>


        </div>
    )
}
