import { Search, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/Imagewithfallback';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-secondary to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent rounded-full">
              <span className="text-sm text-accent-foreground">🎓 Start Learning Today</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground">
              Unlock Your Potential with Expert-Led Courses
            </h1>
            <p className="text-lg text-muted-foreground">
              Join thousands of learners worldwide and master new skills with our comprehensive online courses. Learn at your own pace, anywhere, anytime.
            </p>

            <div className="flex gap-2 bg-white p-2 rounded-lg shadow-lg">
              <div className="flex-1 flex items-center gap-2 px-3">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  className="flex-1 outline-none bg-transparent"
                />
              </div>
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors flex items-center gap-2">
                Search
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl text-primary">1K+</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div>
                <div className="text-3xl text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Expert Instructors</div>
              </div>
              <div>
                {/*<div className="text-3xl text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Courses</div>*/}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758874385197-07d99c183a6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwb25saW5lfGVufDF8fHx8MTc2NzE1ODMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Students learning online"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-xl">
              <div className="text-3xl">4.5⭐</div>
              <div className="text-sm">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
