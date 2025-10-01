import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Why Choose PixelCraft Studio?</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            We blend creativity and technology to deliver <span className="text-accent-foreground font-bold">exceptional web and UI design</span> for brands that want to make an impact.
                        </p>
                        <p className="text-muted-foreground">From custom websites to seamless user experiences, our team helps businesses grow and thrive in the digital world.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Lightning Fast Delivery</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Get your website live in record time without sacrificing quality.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Cutting-Edge Tech</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">We use the latest frameworks and tools to build robust, scalable solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                            <Image src="/clients.png" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1206} height={612} />
                            <Image src="/clients.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1206} height={612} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
