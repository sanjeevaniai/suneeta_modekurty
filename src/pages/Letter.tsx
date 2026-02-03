const Letter = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6 py-12">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
                    For My Children
                </h1>

                <p className="text-lg text-muted-foreground italic mb-12">
                    This story is not written for investors. It is not written for immigration officers. It is written for two people. My son and my daughter.
                </p>

                <div className="space-y-6 text-lg leading-relaxed text-foreground">
                    <p>
                        Someday, you will face a moment when everything falls apart. The path you planned will disappear. The people you depend on will be gone. Your own body may turn against you. The world will tell you to quit.
                    </p>

                    <p className="font-semibold text-xl">
                        Do not quit.
                    </p>

                    <p>
                        Your mother came to this country with a dream. Cancer tried to stop her. Grief tried to stop her. A broken system tried to stop her. She did not stop. She was afraid. But she had something stronger than fear. She had a purpose.
                    </p>

                    <p>
                        Remember this. You cannot pour from an empty cup. So you must keep filling your own. Not with money. Not with titles. With meaning. With work that matters. With the belief that you are here for a reason.
                    </p>

                    <p>
                        Never give up. Keep going. Your dream may change shape. That is okay. What matters is that you never stop moving forward.
                    </p>

                    <p className="mt-12 text-xl font-semibold">
                        I lived for a cause. Now go find yours.
                    </p>

                    <p className="mt-12 text-right text-muted-foreground">
                        —Mom
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Letter;

