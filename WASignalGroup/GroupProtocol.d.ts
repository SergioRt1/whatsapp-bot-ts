import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace groupproto. */
export namespace groupproto {

    /** Properties of a SenderKeyMessage. */
    interface ISenderKeyMessage {

        /** SenderKeyMessage id */
        id?: (number|null);

        /** SenderKeyMessage iteration */
        iteration?: (number|null);

        /** SenderKeyMessage ciphertext */
        ciphertext?: (Uint8Array|null);
    }

    /** Represents a SenderKeyMessage. */
    class SenderKeyMessage implements ISenderKeyMessage {

        /**
         * Constructs a new SenderKeyMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: groupproto.ISenderKeyMessage);

        /** SenderKeyMessage id. */
        public id: number;

        /** SenderKeyMessage iteration. */
        public iteration: number;

        /** SenderKeyMessage ciphertext. */
        public ciphertext: Uint8Array;

        /**
         * Creates a new SenderKeyMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyMessage instance
         */
        public static create(properties?: groupproto.ISenderKeyMessage): groupproto.SenderKeyMessage;

        /**
         * Encodes the specified SenderKeyMessage message. Does not implicitly {@link groupproto.SenderKeyMessage.verify|verify} messages.
         * @param message SenderKeyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: groupproto.ISenderKeyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyMessage message, length delimited. Does not implicitly {@link groupproto.SenderKeyMessage.verify|verify} messages.
         * @param message SenderKeyMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: groupproto.ISenderKeyMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): groupproto.SenderKeyMessage;

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): groupproto.SenderKeyMessage;

        /**
         * Verifies a SenderKeyMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyMessage
         */
        public static fromObject(object: { [k: string]: any }): groupproto.SenderKeyMessage;

        /**
         * Creates a plain object from a SenderKeyMessage message. Also converts values to other types if specified.
         * @param message SenderKeyMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: groupproto.SenderKeyMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderKeyMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SenderKeyDistributionMessage. */
    interface ISenderKeyDistributionMessage {

        /** SenderKeyDistributionMessage id */
        id?: (number|null);

        /** SenderKeyDistributionMessage iteration */
        iteration?: (number|null);

        /** SenderKeyDistributionMessage chainKey */
        chainKey?: (Uint8Array|null);

        /** SenderKeyDistributionMessage signingKey */
        signingKey?: (Uint8Array|null);
    }

    /** Represents a SenderKeyDistributionMessage. */
    class SenderKeyDistributionMessage implements ISenderKeyDistributionMessage {

        /**
         * Constructs a new SenderKeyDistributionMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: groupproto.ISenderKeyDistributionMessage);

        /** SenderKeyDistributionMessage id. */
        public id: number;

        /** SenderKeyDistributionMessage iteration. */
        public iteration: number;

        /** SenderKeyDistributionMessage chainKey. */
        public chainKey: Uint8Array;

        /** SenderKeyDistributionMessage signingKey. */
        public signingKey: Uint8Array;

        /**
         * Creates a new SenderKeyDistributionMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyDistributionMessage instance
         */
        public static create(properties?: groupproto.ISenderKeyDistributionMessage): groupproto.SenderKeyDistributionMessage;

        /**
         * Encodes the specified SenderKeyDistributionMessage message. Does not implicitly {@link groupproto.SenderKeyDistributionMessage.verify|verify} messages.
         * @param message SenderKeyDistributionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: groupproto.ISenderKeyDistributionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyDistributionMessage message, length delimited. Does not implicitly {@link groupproto.SenderKeyDistributionMessage.verify|verify} messages.
         * @param message SenderKeyDistributionMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: groupproto.ISenderKeyDistributionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): groupproto.SenderKeyDistributionMessage;

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): groupproto.SenderKeyDistributionMessage;

        /**
         * Verifies a SenderKeyDistributionMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyDistributionMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyDistributionMessage
         */
        public static fromObject(object: { [k: string]: any }): groupproto.SenderKeyDistributionMessage;

        /**
         * Creates a plain object from a SenderKeyDistributionMessage message. Also converts values to other types if specified.
         * @param message SenderKeyDistributionMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: groupproto.SenderKeyDistributionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyDistributionMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderKeyDistributionMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SenderChainKey. */
    interface ISenderChainKey {

        /** SenderChainKey iteration */
        iteration?: (number|null);

        /** SenderChainKey seed */
        seed?: (Uint8Array|null);
    }

    /** Represents a SenderChainKey. */
    class SenderChainKey implements ISenderChainKey {

        /**
         * Constructs a new SenderChainKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: groupproto.ISenderChainKey);

        /** SenderChainKey iteration. */
        public iteration: number;

        /** SenderChainKey seed. */
        public seed: Uint8Array;

        /**
         * Creates a new SenderChainKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderChainKey instance
         */
        public static create(properties?: groupproto.ISenderChainKey): groupproto.SenderChainKey;

        /**
         * Encodes the specified SenderChainKey message. Does not implicitly {@link groupproto.SenderChainKey.verify|verify} messages.
         * @param message SenderChainKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: groupproto.ISenderChainKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderChainKey message, length delimited. Does not implicitly {@link groupproto.SenderChainKey.verify|verify} messages.
         * @param message SenderChainKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: groupproto.ISenderChainKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderChainKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderChainKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): groupproto.SenderChainKey;

        /**
         * Decodes a SenderChainKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderChainKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): groupproto.SenderChainKey;

        /**
         * Verifies a SenderChainKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderChainKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderChainKey
         */
        public static fromObject(object: { [k: string]: any }): groupproto.SenderChainKey;

        /**
         * Creates a plain object from a SenderChainKey message. Also converts values to other types if specified.
         * @param message SenderChainKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: groupproto.SenderChainKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderChainKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderChainKey
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SenderMessageKey. */
    interface ISenderMessageKey {

        /** SenderMessageKey iteration */
        iteration?: (number|null);

        /** SenderMessageKey seed */
        seed?: (Uint8Array|null);
    }

    /** Represents a SenderMessageKey. */
    class SenderMessageKey implements ISenderMessageKey {

        /**
         * Constructs a new SenderMessageKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: groupproto.ISenderMessageKey);

        /** SenderMessageKey iteration. */
        public iteration: number;

        /** SenderMessageKey seed. */
        public seed: Uint8Array;

        /**
         * Creates a new SenderMessageKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderMessageKey instance
         */
        public static create(properties?: groupproto.ISenderMessageKey): groupproto.SenderMessageKey;

        /**
         * Encodes the specified SenderMessageKey message. Does not implicitly {@link groupproto.SenderMessageKey.verify|verify} messages.
         * @param message SenderMessageKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: groupproto.ISenderMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderMessageKey message, length delimited. Does not implicitly {@link groupproto.SenderMessageKey.verify|verify} messages.
         * @param message SenderMessageKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: groupproto.ISenderMessageKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderMessageKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderMessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): groupproto.SenderMessageKey;

        /**
         * Decodes a SenderMessageKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderMessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): groupproto.SenderMessageKey;

        /**
         * Verifies a SenderMessageKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderMessageKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderMessageKey
         */
        public static fromObject(object: { [k: string]: any }): groupproto.SenderMessageKey;

        /**
         * Creates a plain object from a SenderMessageKey message. Also converts values to other types if specified.
         * @param message SenderMessageKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: groupproto.SenderMessageKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderMessageKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderMessageKey
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SenderSigningKey. */
    interface ISenderSigningKey {

        /** SenderSigningKey public */
        "public"?: (Uint8Array|null);

        /** SenderSigningKey private */
        "private"?: (Uint8Array|null);
    }

    /** Represents a SenderSigningKey. */
    class SenderSigningKey implements ISenderSigningKey {

        /**
         * Constructs a new SenderSigningKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: groupproto.ISenderSigningKey);

        /** SenderSigningKey public. */
        public public: Uint8Array;

        /** SenderSigningKey private. */
        public private: Uint8Array;

        /**
         * Creates a new SenderSigningKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderSigningKey instance
         */
        public static create(properties?: groupproto.ISenderSigningKey): groupproto.SenderSigningKey;

        /**
         * Encodes the specified SenderSigningKey message. Does not implicitly {@link groupproto.SenderSigningKey.verify|verify} messages.
         * @param message SenderSigningKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: groupproto.ISenderSigningKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderSigningKey message, length delimited. Does not implicitly {@link groupproto.SenderSigningKey.verify|verify} messages.
         * @param message SenderSigningKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: groupproto.ISenderSigningKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderSigningKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderSigningKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): groupproto.SenderSigningKey;

        /**
         * Decodes a SenderSigningKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderSigningKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): groupproto.SenderSigningKey;

        /**
         * Verifies a SenderSigningKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderSigningKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderSigningKey
         */
        public static fromObject(object: { [k: string]: any }): groupproto.SenderSigningKey;

        /**
         * Creates a plain object from a SenderSigningKey message. Also converts values to other types if specified.
         * @param message SenderSigningKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: groupproto.SenderSigningKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderSigningKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderSigningKey
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SenderKeyStateStructure. */
    interface ISenderKeyStateStructure {

        /** SenderKeyStateStructure senderKeyId */
        senderKeyId?: (number|null);

        /** SenderKeyStateStructure senderChainKey */
        senderChainKey?: (groupproto.ISenderChainKey|null);

        /** SenderKeyStateStructure senderSigningKey */
        senderSigningKey?: (groupproto.ISenderSigningKey|null);

        /** SenderKeyStateStructure senderMessageKeys */
        senderMessageKeys?: (groupproto.ISenderMessageKey[]|null);
    }

    /** Represents a SenderKeyStateStructure. */
    class SenderKeyStateStructure implements ISenderKeyStateStructure {

        /**
         * Constructs a new SenderKeyStateStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: groupproto.ISenderKeyStateStructure);

        /** SenderKeyStateStructure senderKeyId. */
        public senderKeyId: number;

        /** SenderKeyStateStructure senderChainKey. */
        public senderChainKey?: (groupproto.ISenderChainKey|null);

        /** SenderKeyStateStructure senderSigningKey. */
        public senderSigningKey?: (groupproto.ISenderSigningKey|null);

        /** SenderKeyStateStructure senderMessageKeys. */
        public senderMessageKeys: groupproto.ISenderMessageKey[];

        /**
         * Creates a new SenderKeyStateStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyStateStructure instance
         */
        public static create(properties?: groupproto.ISenderKeyStateStructure): groupproto.SenderKeyStateStructure;

        /**
         * Encodes the specified SenderKeyStateStructure message. Does not implicitly {@link groupproto.SenderKeyStateStructure.verify|verify} messages.
         * @param message SenderKeyStateStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: groupproto.ISenderKeyStateStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyStateStructure message, length delimited. Does not implicitly {@link groupproto.SenderKeyStateStructure.verify|verify} messages.
         * @param message SenderKeyStateStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: groupproto.ISenderKeyStateStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): groupproto.SenderKeyStateStructure;

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): groupproto.SenderKeyStateStructure;

        /**
         * Verifies a SenderKeyStateStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyStateStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyStateStructure
         */
        public static fromObject(object: { [k: string]: any }): groupproto.SenderKeyStateStructure;

        /**
         * Creates a plain object from a SenderKeyStateStructure message. Also converts values to other types if specified.
         * @param message SenderKeyStateStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: groupproto.SenderKeyStateStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyStateStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderKeyStateStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SenderKeyRecordStructure. */
    interface ISenderKeyRecordStructure {

        /** SenderKeyRecordStructure senderKeyStates */
        senderKeyStates?: (groupproto.ISenderKeyStateStructure[]|null);
    }

    /** Represents a SenderKeyRecordStructure. */
    class SenderKeyRecordStructure implements ISenderKeyRecordStructure {

        /**
         * Constructs a new SenderKeyRecordStructure.
         * @param [properties] Properties to set
         */
        constructor(properties?: groupproto.ISenderKeyRecordStructure);

        /** SenderKeyRecordStructure senderKeyStates. */
        public senderKeyStates: groupproto.ISenderKeyStateStructure[];

        /**
         * Creates a new SenderKeyRecordStructure instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SenderKeyRecordStructure instance
         */
        public static create(properties?: groupproto.ISenderKeyRecordStructure): groupproto.SenderKeyRecordStructure;

        /**
         * Encodes the specified SenderKeyRecordStructure message. Does not implicitly {@link groupproto.SenderKeyRecordStructure.verify|verify} messages.
         * @param message SenderKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: groupproto.ISenderKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SenderKeyRecordStructure message, length delimited. Does not implicitly {@link groupproto.SenderKeyRecordStructure.verify|verify} messages.
         * @param message SenderKeyRecordStructure message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: groupproto.ISenderKeyRecordStructure, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): groupproto.SenderKeyRecordStructure;

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): groupproto.SenderKeyRecordStructure;

        /**
         * Verifies a SenderKeyRecordStructure message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SenderKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SenderKeyRecordStructure
         */
        public static fromObject(object: { [k: string]: any }): groupproto.SenderKeyRecordStructure;

        /**
         * Creates a plain object from a SenderKeyRecordStructure message. Also converts values to other types if specified.
         * @param message SenderKeyRecordStructure
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: groupproto.SenderKeyRecordStructure, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SenderKeyRecordStructure to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SenderKeyRecordStructure
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
