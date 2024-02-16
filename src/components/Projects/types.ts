// types.ts
export interface ProjectImage {
    fields: {
    file: {
        url: string;
    };
    };
}
    
export interface Project {
    fields: {
    projectName: string;
    projectDescription: string;
    projectImage: ProjectImage;
    repoLink?: string;
    projectLink?: string;
    };
    sys: {
    id: string;
    };
}

export interface ProjectsResponse {
    items: Project[];
}