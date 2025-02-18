import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetDescription,SheetHeader, SheetTitle, SheetFooter } from "./ui/sheet";

export type CardProps = {
    id: number;
    label: string;
    pic: string ;
    description: string;
    technologies?: string;
    github: string
}

const CommonProjectCard: React.FC<{ Information: CardProps[]; Cardtitle: string }> = ({ Information, Cardtitle }) => {
    const [showSheet, setShowSheet] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const openSheet = (project: CardProps) => {
        setSelectedProject(project);
        setShowSheet(true);
    };

    const closeSheet = () => {
        setShowSheet(false);
        setSelectedProject(null);
    };

    return (
        <div className="container">
            <h1 className="text-left text-2xl font-bold my-5 ml-6 md:ml-11 lg:ml-16">{Cardtitle}</h1>
            <div className="w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
                {Information.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            className="rounded-lg p-4 text-center cursor-pointer shadow-xl transition hover:-translate-y-1"
                        >
                            <div className="center mb-2">
                                <img src={item.pic} alt="item-pic" className="w-12 h-12" />
                            </div>
                            <h2 className="font-bold text-[17px] md:text-lg">{item.label}</h2>

                            <p className="my-1 text-[14px] md:text-[17px] line-clamp-3">
                                {item.description}
                            </p>

                            <button
                                className="text-sm text-blue-600 underline mt-2 ml-2"
                                onClick={() => openSheet(item)}
                            >
                                View More Details
                            </button>

                        </Card>
                    );
                })}
            </div>

            {/* Sheet Component */}
            {showSheet && selectedProject && (
                <Sheet open={showSheet} onOpenChange={closeSheet}>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>{selectedProject.label}</SheetTitle>
                            <SheetDescription>
                                <div className="my-4">
                                    <img
                                        src={selectedProject.pic}
                                        alt="project-pic"
                                        className="w-32 h-32 object-cover mx-auto mb-4"
                                    />
                                    <p className="my-1 text-[16px] md:text-[16px] mb-4">{selectedProject.description}</p>
                                    {selectedProject.technologies && (
                                        <p className="my-1 text-[16px]">
                                            <span className="font-semibold">Technologies:</span> {selectedProject.technologies}
                                        </p>
                                    )}
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                        <SheetFooter>
                            <Link
                                to={selectedProject.github}
                                className="text-blue-800 underline"
                                target="_blank"
                            >
                                View on GitHub
                            </Link>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            )}
        </div>
    );
};

export default CommonProjectCard;



