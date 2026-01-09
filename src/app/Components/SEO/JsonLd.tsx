import React from 'react';

interface JsonLdProps {
    data: object | object[];
}

export default function JsonLd({ data }: JsonLdProps) {
    const schemaArray = Array.isArray(data) ? data : [data];

    return (
        <>
            {schemaArray.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}
