import { Cpu, Fingerprint, Pencil, Settings2, Sparkles, Zap } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Our Web & UI Design Services</h2>
                    <p>From concept to launch, we offer a full suite of digital solutions to help your business shine online.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Rapid Prototyping</h3>
                        </div>
                        <p className="text-sm">Quickly visualize and iterate on your ideas with interactive prototypes.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Custom Development</h3>
                        </div>
                        <p className="text-sm">Tailored web solutions built for your unique business needs.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />
                            <h3 className="text-sm font-medium">Brand Identity</h3>
                        </div>
                        <p className="text-sm">Distinctive designs that capture your brand’s personality.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />
                            <h3 className="text-sm font-medium">UI/UX Design</h3>
                        </div>
                        <p className="text-sm">Intuitive interfaces that delight users and drive results.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Settings2 className="size-4" />
                            <h3 className="text-sm font-medium">Ongoing Support</h3>
                        </div>
                        <p className="text-sm">We’re here to help you grow and adapt as your business evolves.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">SEO & Performance</h3>
                        </div>
                        <p className="text-sm">Optimized for speed, accessibility, and search engine ranking.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
