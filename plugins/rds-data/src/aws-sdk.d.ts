// Generated from @aws-sdk/client-rds-data@3.1136.0 by npm run gen. Do not edit.
// AWS SDK and Smithy declarations: see ../readme.md#attribution.

interface ResponseMetadata {
	/**
	 * The status code of the last HTTP response received for this operation.
	 */
	httpStatusCode?: number;
	/**
	 * A unique identifier for the last request sent for this operation. Often
	 * requested by AWS service teams to aid in debugging.
	 */
	requestId?: string;
	/**
	 * A secondary identifier for the last request sent. Used for debugging.
	 */
	extendedRequestId?: string;
	/**
	 * A tertiary identifier for the last request sent. Used for debugging.
	 */
	cfId?: string;
	/**
	 * The number of times this operation was attempted.
	 */
	attempts?: number;
	/**
	 * The total amount of time (in milliseconds) that was spent waiting between
	 * retry attempts.
	 */
	totalRetryDelay?: number;
}
interface MetadataBearer {
	/**
	 * Metadata pertaining to this request.
	 */
	$metadata: ResponseMetadata;
}
interface BeginTransactionResponse {
	/**
	 * <p>The transaction ID of the transaction started by the call.</p>
	 * @public
	 */
	transactionId?: string | undefined;
}
interface ColumnMetadata {
	/**
	 * <p>The name of the column.</p>
	 * @public
	 */
	name?: string | undefined;
	/**
	 * <p>The type of the column.</p>
	 * @public
	 */
	type?: number | undefined;
	/**
	 * <p>The database-specific data type of the column.</p>
	 * @public
	 */
	typeName?: string | undefined;
	/**
	 * <p>The label for the column.</p>
	 * @public
	 */
	label?: string | undefined;
	/**
	 * <p>The name of the schema that owns the table that includes the column.</p>
	 * @public
	 */
	schemaName?: string | undefined;
	/**
	 * <p>The name of the table that includes the column.</p>
	 * @public
	 */
	tableName?: string | undefined;
	/**
	 * <p>A value that indicates whether the column increments automatically.</p>
	 * @public
	 */
	isAutoIncrement?: boolean | undefined;
	/**
	 * <p>A value that indicates whether an integer column is signed.</p>
	 * @public
	 */
	isSigned?: boolean | undefined;
	/**
	 * <p>A value that indicates whether the column contains currency values.</p>
	 * @public
	 */
	isCurrency?: boolean | undefined;
	/**
	 * <p>A value that indicates whether the column is case-sensitive.</p>
	 * @public
	 */
	isCaseSensitive?: boolean | undefined;
	/**
	 * <p>A value that indicates whether the column is nullable.</p>
	 * @public
	 */
	nullable?: number | undefined;
	/**
	 * <p>The precision value of a decimal number column.</p>
	 * @public
	 */
	precision?: number | undefined;
	/**
	 * <p>The scale value of a decimal number column.</p>
	 * @public
	 */
	scale?: number | undefined;
	/**
	 * <p>The type of the column.</p>
	 * @public
	 */
	arrayBaseColumnType?: number | undefined;
}
interface CommitTransactionResponse {
	/**
	 * <p>The status of the commit operation.</p>
	 * @public
	 */
	transactionStatus?: string | undefined;
}
interface ResultSetMetadata {
	/**
	 * <p>The number of columns in the result set.</p>
	 * @public
	 */
	columnCount?: number | undefined;
	/**
	 * <p>The metadata of the columns in the result set.</p>
	 * @public
	 */
	columnMetadata?: ColumnMetadata[] | undefined;
}
interface RollbackTransactionResponse {
	/**
	 * <p>The status of the rollback operation.</p>
	 * @public
	 */
	transactionStatus?: string | undefined;
}
type ArrayValue = ArrayValue.ArrayValuesMember | ArrayValue.BooleanValuesMember | ArrayValue.DoubleValuesMember | ArrayValue.LongValuesMember | ArrayValue.StringValuesMember | ArrayValue.$UnknownMember;
declare namespace ArrayValue {
	/**
	 * <p>An array of Boolean values. Can contain null values.</p>
	 * @public
	 */
	interface BooleanValuesMember {
		booleanValues: (boolean | null)[];
		longValues?: never;
		doubleValues?: never;
		stringValues?: never;
		arrayValues?: never;
		$unknown?: never;
	}
	/**
	 * <p>An array of integers. Can contain null values.</p>
	 * @public
	 */
	interface LongValuesMember {
		booleanValues?: never;
		longValues: (number | null)[];
		doubleValues?: never;
		stringValues?: never;
		arrayValues?: never;
		$unknown?: never;
	}
	/**
	 * <p>An array of floating-point numbers. Can contain null values.</p>
	 * @public
	 */
	interface DoubleValuesMember {
		booleanValues?: never;
		longValues?: never;
		doubleValues: (number | null)[];
		stringValues?: never;
		arrayValues?: never;
		$unknown?: never;
	}
	/**
	 * <p>An array of strings. Can contain null values.</p>
	 * @public
	 */
	interface StringValuesMember {
		booleanValues?: never;
		longValues?: never;
		doubleValues?: never;
		stringValues: (string | null)[];
		arrayValues?: never;
		$unknown?: never;
	}
	/**
	 * <p>An array of arrays. Can contain null values.</p>
	 * @public
	 */
	interface ArrayValuesMember {
		booleanValues?: never;
		longValues?: never;
		doubleValues?: never;
		stringValues?: never;
		arrayValues: (ArrayValue | null)[];
		$unknown?: never;
	}
	/**
	 * @public
	 */
	interface $UnknownMember {
		booleanValues?: never;
		longValues?: never;
		doubleValues?: never;
		stringValues?: never;
		arrayValues?: never;
		$unknown: [
			string,
			any
		];
	}
	/**
	 * @deprecated unused in schema-serde mode.
	 *
	 */
	interface Visitor<T> {
		booleanValues: (value: (boolean | null)[]) => T;
		longValues: (value: (number | null)[]) => T;
		doubleValues: (value: (number | null)[]) => T;
		stringValues: (value: (string | null)[]) => T;
		arrayValues: (value: (ArrayValue | null)[]) => T;
		_: (name: string, value: any) => T;
	}
}
type Field = Field.ArrayValueMember | Field.BlobValueMember | Field.BooleanValueMember | Field.DoubleValueMember | Field.IsNullMember | Field.LongValueMember | Field.StringValueMember | Field.$UnknownMember;
declare namespace Field {
	/**
	 * <p>A NULL value.</p>
	 * @public
	 */
	interface IsNullMember {
		isNull: boolean;
		booleanValue?: never;
		longValue?: never;
		doubleValue?: never;
		stringValue?: never;
		blobValue?: never;
		arrayValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>A value of Boolean data type.</p>
	 * @public
	 */
	interface BooleanValueMember {
		isNull?: never;
		booleanValue: boolean;
		longValue?: never;
		doubleValue?: never;
		stringValue?: never;
		blobValue?: never;
		arrayValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>A value of long data type.</p>
	 * @public
	 */
	interface LongValueMember {
		isNull?: never;
		booleanValue?: never;
		longValue: number;
		doubleValue?: never;
		stringValue?: never;
		blobValue?: never;
		arrayValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>A value of double data type.</p>
	 * @public
	 */
	interface DoubleValueMember {
		isNull?: never;
		booleanValue?: never;
		longValue?: never;
		doubleValue: number;
		stringValue?: never;
		blobValue?: never;
		arrayValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>A value of string data type.</p>
	 * @public
	 */
	interface StringValueMember {
		isNull?: never;
		booleanValue?: never;
		longValue?: never;
		doubleValue?: never;
		stringValue: string;
		blobValue?: never;
		arrayValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>A value of BLOB data type.</p>
	 * @public
	 */
	interface BlobValueMember {
		isNull?: never;
		booleanValue?: never;
		longValue?: never;
		doubleValue?: never;
		stringValue?: never;
		blobValue: Uint8Array;
		arrayValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>An array of values.</p>
	 * @public
	 */
	interface ArrayValueMember {
		isNull?: never;
		booleanValue?: never;
		longValue?: never;
		doubleValue?: never;
		stringValue?: never;
		blobValue?: never;
		arrayValue: ArrayValue;
		$unknown?: never;
	}
	/**
	 * @public
	 */
	interface $UnknownMember {
		isNull?: never;
		booleanValue?: never;
		longValue?: never;
		doubleValue?: never;
		stringValue?: never;
		blobValue?: never;
		arrayValue?: never;
		$unknown: [
			string,
			any
		];
	}
	/**
	 * @deprecated unused in schema-serde mode.
	 *
	 */
	interface Visitor<T> {
		isNull: (value: boolean) => T;
		booleanValue: (value: boolean) => T;
		longValue: (value: number) => T;
		doubleValue: (value: number) => T;
		stringValue: (value: string) => T;
		blobValue: (value: Uint8Array) => T;
		arrayValue: (value: ArrayValue) => T;
		_: (name: string, value: any) => T;
	}
}
interface UpdateResult {
	/**
	 * <p>Values for fields generated during the request.</p>
	 * @public
	 */
	generatedFields?: Field[] | undefined;
}
type Value = Value.ArrayValuesMember | Value.BigIntValueMember | Value.BitValueMember | Value.BlobValueMember | Value.DoubleValueMember | Value.IntValueMember | Value.IsNullMember | Value.RealValueMember | Value.StringValueMember | Value.StructValueMember | Value.$UnknownMember;
declare namespace Value {
	/**
	 * <p>A NULL value.</p>
	 * @public
	 */
	interface IsNullMember {
		isNull: boolean;
		bitValue?: never;
		bigIntValue?: never;
		intValue?: never;
		doubleValue?: never;
		realValue?: never;
		stringValue?: never;
		blobValue?: never;
		arrayValues?: never;
		structValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>A value for a column of BIT data type.</p>
	 * @public
	 */
	interface BitValueMember {
		isNull?: never;
		bitValue: boolean;
		bigIntValue?: never;
		intValue?: never;
		doubleValue?: never;
		realValue?: never;
		stringValue?: never;
		blobValue?: never;
		arrayValues?: never;
		structValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>A value for a column of big integer data type.</p>
	 * @public
	 */
	interface BigIntValueMember {
		isNull?: never;
		bitValue?: never;
		bigIntValue: number;
		intValue?: never;
		doubleValue?: never;
		realValue?: never;
		stringValue?: never;
		blobValue?: never;
		arrayValues?: never;
		structValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>A value for a column of integer data type.</p>
	 * @public
	 */
	interface IntValueMember {
		isNull?: never;
		bitValue?: never;
		bigIntValue?: never;
		intValue: number;
		doubleValue?: never;
		realValue?: never;
		stringValue?: never;
		blobValue?: never;
		arrayValues?: never;
		structValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>A value for a column of double data type.</p>
	 * @public
	 */
	interface DoubleValueMember {
		isNull?: never;
		bitValue?: never;
		bigIntValue?: never;
		intValue?: never;
		doubleValue: number;
		realValue?: never;
		stringValue?: never;
		blobValue?: never;
		arrayValues?: never;
		structValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>A value for a column of real data type.</p>
	 * @public
	 */
	interface RealValueMember {
		isNull?: never;
		bitValue?: never;
		bigIntValue?: never;
		intValue?: never;
		doubleValue?: never;
		realValue: number;
		stringValue?: never;
		blobValue?: never;
		arrayValues?: never;
		structValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>A value for a column of string data type.</p>
	 * @public
	 */
	interface StringValueMember {
		isNull?: never;
		bitValue?: never;
		bigIntValue?: never;
		intValue?: never;
		doubleValue?: never;
		realValue?: never;
		stringValue: string;
		blobValue?: never;
		arrayValues?: never;
		structValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>A value for a column of BLOB data type.</p>
	 * @public
	 */
	interface BlobValueMember {
		isNull?: never;
		bitValue?: never;
		bigIntValue?: never;
		intValue?: never;
		doubleValue?: never;
		realValue?: never;
		stringValue?: never;
		blobValue: Uint8Array;
		arrayValues?: never;
		structValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>An array of column values.</p>
	 * @public
	 */
	interface ArrayValuesMember {
		isNull?: never;
		bitValue?: never;
		bigIntValue?: never;
		intValue?: never;
		doubleValue?: never;
		realValue?: never;
		stringValue?: never;
		blobValue?: never;
		arrayValues: Value[];
		structValue?: never;
		$unknown?: never;
	}
	/**
	 * <p>A value for a column of STRUCT data type.</p>
	 * @public
	 */
	interface StructValueMember {
		isNull?: never;
		bitValue?: never;
		bigIntValue?: never;
		intValue?: never;
		doubleValue?: never;
		realValue?: never;
		stringValue?: never;
		blobValue?: never;
		arrayValues?: never;
		structValue: StructValue;
		$unknown?: never;
	}
	/**
	 * @public
	 */
	interface $UnknownMember {
		isNull?: never;
		bitValue?: never;
		bigIntValue?: never;
		intValue?: never;
		doubleValue?: never;
		realValue?: never;
		stringValue?: never;
		blobValue?: never;
		arrayValues?: never;
		structValue?: never;
		$unknown: [
			string,
			any
		];
	}
	/**
	 * @deprecated unused in schema-serde mode.
	 *
	 */
	interface Visitor<T> {
		isNull: (value: boolean) => T;
		bitValue: (value: boolean) => T;
		bigIntValue: (value: number) => T;
		intValue: (value: number) => T;
		doubleValue: (value: number) => T;
		realValue: (value: number) => T;
		stringValue: (value: string) => T;
		blobValue: (value: Uint8Array) => T;
		arrayValues: (value: Value[]) => T;
		structValue: (value: StructValue) => T;
		_: (name: string, value: any) => T;
	}
}
interface StructValue {
	/**
	 * <p>The attributes returned in the record.</p>
	 * @public
	 */
	attributes?: Value[] | undefined;
}
interface BatchExecuteStatementResponse {
	/**
	 * <p>The execution results of each batch entry.</p>
	 * @public
	 */
	updateResults?: UpdateResult[] | undefined;
}
interface _Record {
	/**
	 * <p>The values returned in the record.</p>
	 * @public
	 */
	values?: Value[] | undefined;
}
interface ExecuteStatementResponse {
	/**
	 * <p>The records returned by the SQL statement. This field is blank if the <code>formatRecordsAs</code> parameter is set to <code>JSON</code>.</p>
	 * @public
	 */
	records?: Field[][] | undefined;
	/**
	 * <p>Metadata for the columns included in the results. This field is blank if the <code>formatRecordsAs</code> parameter is set to <code>JSON</code>.</p>
	 * @public
	 */
	columnMetadata?: ColumnMetadata[] | undefined;
	/**
	 * <p>The number of records updated by the request.</p>
	 * @public
	 */
	numberOfRecordsUpdated?: number | undefined;
	/**
	 * <p>Values for fields generated during a DML request.</p> <note> <p>The <code>generatedFields</code> data isn't supported by Aurora PostgreSQL. To get the values of generated fields, use the <code>RETURNING</code> clause. For more information, see <a href="https://www.postgresql.org/docs/10/dml-returning.html">Returning Data From Modified Rows</a> in the PostgreSQL documentation.</p> </note>
	 * @public
	 */
	generatedFields?: Field[] | undefined;
	/**
	 * <p>A string value that represents the result set of a <code>SELECT</code> statement in JSON format. This value is only present when the <code>formatRecordsAs</code> parameter is set to <code>JSON</code>.</p> <p>The size limit for this field is currently 10 MB. If the JSON-formatted string representing the result set requires more than 10 MB, the call returns an error.</p>
	 * @public
	 */
	formattedRecords?: string | undefined;
}
interface ResultFrame {
	/**
	 * <p>The result-set metadata in the result set.</p>
	 * @public
	 */
	resultSetMetadata?: ResultSetMetadata | undefined;
	/**
	 * <p>The records in the result set.</p>
	 * @public
	 */
	records?: _Record[] | undefined;
}
interface SqlStatementResult {
	/**
	 * <p>The result set of the SQL statement.</p>
	 * @public
	 */
	resultFrame?: ResultFrame | undefined;
	/**
	 * <p>The number of records updated by a SQL statement.</p>
	 * @public
	 */
	numberOfRecordsUpdated?: number | undefined;
}
interface ExecuteSqlResponse {
	/**
	 * <p>The results of the SQL statement or statements.</p>
	 * @public
	 */
	sqlStatementResults?: SqlStatementResult[] | undefined;
}
/**
 * @public
 *
 * The output of {@link BatchExecuteStatementCommand}.
 */
export interface BatchExecuteStatementCommandOutput extends BatchExecuteStatementResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link BeginTransactionCommand}.
 */
export interface BeginTransactionCommandOutput extends BeginTransactionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link CommitTransactionCommand}.
 */
export interface CommitTransactionCommandOutput extends CommitTransactionResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ExecuteSqlCommand}.
 */
export interface ExecuteSqlCommandOutput extends ExecuteSqlResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link ExecuteStatementCommand}.
 */
export interface ExecuteStatementCommandOutput extends ExecuteStatementResponse, MetadataBearer {
}
/**
 * @public
 *
 * The output of {@link RollbackTransactionCommand}.
 */
export interface RollbackTransactionCommandOutput extends RollbackTransactionResponse, MetadataBearer {
}

export {};
