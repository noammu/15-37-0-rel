import React from 'react';
import { useLoaderData } from '@remix-run/react';
import type { LoaderFunctionArgs } from '@remix-run/node';

export const loader = async ({ params }: LoaderFunctionArgs) => {
    return { params };
};

const Asdasdparammmmmm = () => {
    const { params } = useLoaderData<typeof loader>();
    return (
        <div>
            <div>parammmmmm: {params['parammmmmm']}</div>
        </div>
    );
};

export default Asdasdparammmmmm;
