import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon?: React.ReactNode;
}

export const StatsCard = ({ title, value, description, icon }: StatsCardProps) => {
  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50">
      <CardContent className="p-6 text-center">
        {icon && (
          <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
        <div className="text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
          {value}
        </div>
        <div className="text-sm font-medium text-foreground mb-1">
          {title}
        </div>
        <div className="text-xs text-muted-foreground">
          {description}
        </div>
      </CardContent>
    </Card>
  );
};