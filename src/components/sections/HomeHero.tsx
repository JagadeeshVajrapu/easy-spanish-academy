"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FlagAccent } from "@/components/ui/FlagAccent";

export function HomeHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[min(92vh,920px)] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2200&q=80"
          alt="Learners practicing conversation in a modern language classroom"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="bg-hero-overlay absolute inset-0" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(201,162,39,0.2),transparent_42%)]"
        />
      </div>

      <Container className="relative flex min-h-[min(92vh,920px)] flex-col justify-end px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <p className="font-display text-lg font-semibold tracking-tight text-white/90 sm:text-2xl">
            Easy Spanish Academy
          </p>
          <h1 className="text-hero mt-3 max-w-3xl text-white sm:mt-4">
            Learn Today. Speak Tomorrow. Connect Forever.
          </h1>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-white/80 sm:mt-5 sm:text-lg">
            Build your confidence in Spanish and German with structured courses
            designed to help you learn, practice and communicate.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-white/12 px-3.5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/18 focus-esa"
            >
              <FlagAccent country="ES" size="md" />
              Spanish Language
            </Link>
            <Link
              href="/courses/german/certificate-diploma"
              className="inline-flex items-center gap-2 rounded-xl bg-white/12 px-3.5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/18 focus-esa"
            >
              <FlagAccent country="DE" size="md" />
              German Language
            </Link>
          </div>

          <div className="mt-7 flex w-full flex-col gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
            <Button href="#featured-courses" size="lg" className="w-full sm:w-auto">
              Explore Courses
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="w-full border-white/25 bg-white/10 text-white hover:bg-white/15 sm:w-auto"
            >
              Talk to Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
