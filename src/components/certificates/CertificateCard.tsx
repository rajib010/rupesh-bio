import React, { useState, useEffect, useRef } from "react";
import { Card } from "../ui/card";

export type CertificateCardProps = {
    id: number;
    label: string;
    year: string;
    pic: string;
};

const CertificateCard: React.FC<{ CertificateInfo: CertificateCardProps[] }> = ({
    CertificateInfo,
}) => {
    const [selectedCertificate, setSelectedCertificate] = useState<CertificateCardProps | null>(null);
    const [showSheet, setShowSheet] = useState<boolean>(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const openSheet = (item: CertificateCardProps) => {
        setSelectedCertificate(item);
        setShowSheet(true);
    };

    const closeSheet = () => {
        setShowSheet(false);
        setSelectedCertificate(null);
    };

    // Handle click outside the modal
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeSheet();
            }
        };

        if (showSheet) {
            document.addEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showSheet]);

    return (
        <div className="container mx-auto py-6">
            {/* Certificate Cards */}
            <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {CertificateInfo.map((item) => (
                    <Card
                        key={item.id}
                        className="rounded-lg p-4 text-center cursor-pointer shadow-lg transition-transform hover:-translate-y-1"
                    >
                        <h2 className="font-bold text-lg mb-2">{item.label}</h2>
                        <p className="text-sm text-gray-500 mb-1">{item.year}</p>
                        <button
                            className="text-sm text-blue-600 underline"
                            onClick={() => openSheet(item)}
                        >
                            View Certificate
                        </button>
                    </Card>
                ))}
            </div>

            {/* Sheet Component */}
            {showSheet && selectedCertificate && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div
                        ref={modalRef}
                        className="bg-white dark:bg-slate-800 rounded-lg w-[90%] max-w-2xl p-8 shadow-xl"
                    >
                        <h2 className="text-2xl font-semibold">{selectedCertificate.label}</h2>
                        <div className="my-4">
                            <img
                                src={selectedCertificate.pic}
                                alt="project-pic"
                                className="w-auto h-60 object-cover mx-auto mb-4"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="text-red-800 font-semibold dark:bg-slate-100 px-2 py-2 rounded "
                                onClick={closeSheet}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CertificateCard;
