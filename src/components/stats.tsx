export default function StatsSection() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-4xl font-medium lg:text-5xl">PixelCraft Studio by the Numbers</h2>
                    <p>We’ve helped brands of all sizes launch stunning digital experiences. Here’s a look at our impact.</p>
                </div>

                <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+150</div>
                        <p>Websites Launched</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">98%</div>
                        <p>Client Satisfaction</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+10</div>
                        <p>Years of Experience</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
