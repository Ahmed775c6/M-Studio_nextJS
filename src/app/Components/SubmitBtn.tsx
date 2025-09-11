'use client';

interface ButtonProps {
    isLoading: boolean;
    text?: string;
}

const SubmitBtn = ({ isLoading, text }: ButtonProps) => {
    return (
        <>
            {isLoading ? (
                <button
                    className="bg-[var(--brown)] w-full rounded-md font-semibold uppercase p-3 flex justify-center cursor-not-allowed text-white gap-4"
                    type="button"
                    disabled={isLoading}
                >
                    <img src="/loader.svg" alt="loader" width={24} height={24} className='animate-spin' /> Loading ...
                </button>
            ) : (
                <button type="submit" className="bg-[var(--brown)] w-full cursor-pointer  text-white uppercase p-3">
                    {text ? text : 'Send'}
                </button>
            )}
        </>
    );
};
export default SubmitBtn;