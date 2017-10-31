import test from 'ava';
import check from '.';

const checkValid = (t, validPayload) => {
    t.deepEqual(check(validPayload), validPayload);
};

const checkInvalid = (t, invalidPayload) => {
    const err = t.throws(() => {
        check(invalidPayload);
    });
    t.is(err.name, 'ValidationError');
};

// Valid payloads

test('valid if all fields are non-empty', checkValid, {
    facebook : 'foo',
    twitter  : 'foo',
    youtube  : 'foo'
});

test('valid if any field is non-empty, others null', checkValid, {
    facebook : 'foo',
    // NOTE: We could instead replace these with empty strings, if it helps.
    twitter  : null,
    youtube  : null
});

// Invalid payloads

test('invalid if any field is non-empty, others empty', checkInvalid, {
    facebook : 'foo',
    // NOTE: We could instead replace these with null, if it helps.
    twitter  : '',
    youtube  : ''
});

test('invalid if any field is non-empty, others explicitly undefined', checkInvalid, {
    facebook : 'foo',
    twitter  : undefined,
    youtube  : undefined
});

test('invalid if any field is non-empty, others implicitly undefined', checkInvalid, {
    facebook : 'foo'
});

test('invalid if all fields are empty', checkInvalid, {
    facebook : '',
    twitter  : '',
    youtube  : ''
});

test('invalid if all fields are null', checkInvalid, {
    facebook : null,
    twitter  : null,
    youtube  : null
});

test('invalid if all fields are explicitly undefined', checkInvalid, {
    facebook : undefined,
    twitter  : undefined,
    youtube  : undefined
});

test('invalid if all fields are implicitly undefined', checkInvalid, {});

test('invalid if payload is null', checkInvalid, null);

test('invalid if payload is undefined', checkInvalid, undefined);
