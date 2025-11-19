import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PortfolioConfig, portfolioConfig } from './config/portfolio.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly config: PortfolioConfig = portfolioConfig;

  protected readonly sections = this.config.sections.order;

  protected get themeStyle(): { [key: string]: string } {
    const theme = this.config.theme;
    return {
      '--primary-color': theme.primaryColor,
      '--secondary-color': theme.secondaryColor,
      '--background-color': theme.backgroundColor,
      '--surface-color': theme.surfaceColor,
      '--text-color': theme.textColor,
      '--muted-text-color': theme.mutedTextColor,
      '--font-family': theme.fontFamily,
    };
  }
}
