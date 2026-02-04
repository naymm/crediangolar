import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import videoThumbnail from '@/assets/capa-video.png';

const VideoSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary-foreground mb-12">
          Transforme a sua ideia em <span className="text-accent">ação</span>
        </h2>

        {/* Video Container */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-elevated">
          {/* Video Thumbnail */}
          <div className="relative aspect-video">
            <img
              src={videoThumbnail}
              alt="Vídeo institucional"
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-primary/50" />

            {/* Video Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-6 max-w-lg">
                Qual crédito que se adapta a minha situação?
              </h3>
              
              {/* Play Button */}
              <Button className="btn-gold flex items-center gap-3 px-8 py-6 text-base">
                <Play className="w-5 h-5 fill-current" />
                Ver o Vídeo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
